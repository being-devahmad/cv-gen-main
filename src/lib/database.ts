import { db } from '@/lib/db'

export async function saveResumeData(allData: Record<string, any>, userId: string) {
    try {
        const result = await db.collection('resumes').insertOne({
            ...allData,
            userId,
            createdAt: new Date(),
        })

        return result.insertedId
    } catch (error) {
        console.error('Error saving resume data:', error)
        throw error
    }
}

