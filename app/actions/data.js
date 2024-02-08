import prisma from "../lib/prismadb";

export const fetchResponses = async () => {
    try {
        const responses = await prisma.post.findMany(); 
        return responses; 
    } catch (err) {
        console.log(err);
        throw new Error('failed to fetch responses');
    }
};
