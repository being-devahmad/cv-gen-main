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
  userId: string; // Add this field to the interface
}

const ResumeTemplates = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchResumes = async () => {
      console.log("Current user:", user);
      console.log("Querying resumes for user ID:", user?.id);

      if (!user) {
        setLoading(false);
        setError("User not authenticated");
        return;
      }

      try {
        const resumesCollection = collection(db, 'resumes');
        const resumeQuery = query(resumesCollection, where("userId", "==", user.id));
        const resumeSnapshot = await getDocs(resumeQuery);

        console.log("Query snapshot size:", resumeSnapshot.size);
        console.log("Query snapshot empty:", resumeSnapshot.empty);

        const resumeList = resumeSnapshot.docs.map(doc => {
          const data = doc.data();
          console.log("Resume document:", doc.id, data);
          return {
            id: doc.id,
            ...data
          } as Resume;
        });

        console.log("Processed resume list:", resumeList);
        setResumes(resumeList);
        setError(null);
      } catch (error) {
        console.error("Error fetching resumes:", error);
        setError(`Failed to fetch resumes: ${error instanceof Error ? error.message : 'Unknown error'}`);
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

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Resumes</h1>
      <p className="mb-4">User ID: {user?.id}</p>
      {resumes.length === 0 ? (
        <div className="text-center py-4">
          No resumes found for this user ID. Please check if you have created any resumes or if there's a mismatch in user IDs.
        </div>
      ) : (
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
                <p className="text-slate-500 text-xs">Resume ID: {resume.id}</p>
                <p className="text-slate-500 text-xs">User ID: {resume.userId}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResumeTemplates;

