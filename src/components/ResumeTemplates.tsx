import { Card, CardContent, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { useAuth } from "@/hooks/useAuth";

interface Resume {
  id: string;
  name: string;
  url: string;
  updatedAt: {
    seconds: number;
    nanoseconds: number;
  };
  
}

const ResumeTemplates = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchResumes = async () => {
      if (!user) {
        setLoading(false);
        setError("User not authenticated");
        return;
      }

      try {
        const resumesCollection = collection(db, 'resumes');
        const resumeQuery = query(resumesCollection, where("userId", "==", user.id));
        const resumeSnapshot = await getDocs(resumeQuery);
        const resumeList = resumeSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Resume[];

        console.log("Resumes by this user:", resumeList);
        setResumes(resumeList);
        setError(null);
      } catch (error) {
        console.error("Error fetching resumes:", error);
        setError("Failed to fetch resumes. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchResumes();
  }, [user]);

  const formatDate = (timestamp: { seconds: number; nanoseconds: number }) => {
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString();
  };

  if (loading) {
    return <div className="text-center py-4">Loading your resumes...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  if (resumes.length === 0) {
    return <div className="text-center py-4">You haven't created any resumes yet.</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {resumes.map((resume) => (
        <Card key={resume.id}>
          <CardHeader className="p-3">
            <div className="max-w-[240px]">
              <Image
                src={resume.url}
                alt={resume.name}
                className="rounded-md w-full object-cover"
              />
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="mt-2 p-2">
            <h2 className="font-bold text-md">{resume.name}</h2>
            <p className="text-slate-600 text-xm">{formatDate(resume.updatedAt)}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ResumeTemplates;

