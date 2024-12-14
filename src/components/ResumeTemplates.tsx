import { useEffect, useState } from "react"
import { collection, doc, getDocs, query, updateDoc, deleteDoc, where } from "firebase/firestore"
import { db } from "@/lib/firebaseConfig"
import { useAuth } from "@/hooks/useAuth"
import { templates } from "@/data/templates"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Image } from "@nextui-org/react"

interface Resume {
  id: string
  name: string
  url: string
  updatedAt: {
    seconds: number
    nanoseconds: number
  }
  userId: string
  templateId?: string
}

export function ResumeTemplates() {
  const [resumes, setResumes] = useState<Resume[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedResume, setSelectedResume] = useState<Resume | null>(null)
  const [updatedName, setUpdatedName] = useState("")
  const { user } = useAuth()

  useEffect(() => {
    const fetchResumes = async () => {
      if (!user?.id) {
        setLoading(false)
        setError("User not authenticated")
        return
      }

      try {
        const resumesCollection = collection(db, "resumes")
        const resumeQuery = query(resumesCollection, where("userId", "==", user.id))
        const resumeSnapshot = await getDocs(resumeQuery)

        if (resumeSnapshot.empty) {
          console.log("No resumes found")
          setResumes([])
        } else {
          const resumeList = resumeSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          } as Resume))
          setResumes(resumeList)
        }
        setError(null)
      } catch (error) {
        console.error("Error fetching resumes:", error)
        setError(
          `Failed to fetch resumes: ${error instanceof Error ? error.message : "Unknown error"}`
        )
      } finally {
        setLoading(false)
      }
    }

    fetchResumes()
  }, [user])

  const getTemplateImage = (templateId?: string) => {
    const template = templates.find((temp) => temp.id === templateId)
    return template?.image || "/placeholder.svg?height=240&width=320"
  }


  const handleSave = async () => {
    if (!selectedResume || !updatedName.trim()) return

    try {
      const resumeDoc = doc(db, "resumes", selectedResume.id)
      await updateDoc(resumeDoc, { name: updatedName })

      setResumes((prev) =>
        prev.map((resume) =>
          resume.id === selectedResume.id ? { ...resume, name: updatedName } : resume
        )
      )

      setSelectedResume(null)
    } catch (error) {
      console.error("Error updating resume:", error)
    }
  }

  const handleDelete = async () => {
    if (!selectedResume) return

    try {
      const resumeDoc = doc(db, "resumes", selectedResume.id)
      await deleteDoc(resumeDoc)

      setResumes((prev) => prev.filter((resume) => resume.id !== selectedResume.id))
      setSelectedResume(null)
    } catch (error) {
      console.error("Error deleting resume:", error)
    }
  }

  if (loading) {
    return <ResumesSkeleton />
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Your Resumes</h1>
      {resumes.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">
              No resumes found. Create your first resume to get started!
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {resumes.map((resume) => (
            <ResumeCard
              key={resume.id}
              resume={resume}
              onEdit={() => {
                setSelectedResume(resume)
                setUpdatedName(resume.name)
              }}
            />
          ))}
        </div>
      )}

      <Dialog open={!!selectedResume} onOpenChange={() => setSelectedResume(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Resume</DialogTitle>
            <DialogDescription>Make changes to your resume here.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center justify-center">
              <Image
                src={getTemplateImage(selectedResume?.templateId)}
                alt="Selected Resume"
                className="col-span-4 rounded-md object-cover w-full h-64"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="name"
                placeholder="Untitled"
                onChange={(e) => setUpdatedName(e.target.value)}
                className="col-span-4"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={handleDelete}>
              Delete
            </Button>
            <Button onClick={handleSave}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function ResumeCard({ resume, onEdit }: { resume: Resume; onEdit: () => void }) {
  const templateImage = getTemplateImage(resume.templateId)

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0 flex justify-center items-center" >
        <Image
          src={templateImage}
          alt={resume.name}
          className="h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h2 className="font-semibold text-lg truncate">{resume.name || "Untitled"}</h2>
        <p className="text-sm text-muted-foreground">
          Last UpdatedAt : {formatDate(resume.updatedAt)}
        </p>
      </CardContent>
      <CardFooter>
        <Button onClick={onEdit} className="w-full">
          Edit
        </Button>
      </CardFooter>
    </Card>
  )
}

function ResumesSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-9 w-[200px]" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="p-0">
              <Skeleton className="h-48 w-full" />
            </CardHeader>
            <CardContent className="p-4 space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-4 w-24" />
            </CardContent>
            <CardFooter>
              <Skeleton className="h-9 w-full" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

function getTemplateImage(templateId?: string) {
  const template = templates.find((temp) => temp.id === templateId)
  return template?.image || "/placeholder.svg?height=240&width=320"
}



function formatDate(timestamp: { seconds: number; nanoseconds: number }) {
  const date = new Date(timestamp.seconds * 1000)
  return date.toLocaleDateString()
}