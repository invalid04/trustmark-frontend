import prisma from "@/app/lib/prismadb";

export default async function handler(req, res) {
  const { id } = req.query;  // Extract the ID for GET, PATCH, DELETE

  switch (req.method) {
    case 'POST':
      try {
        const userForm = await prisma.userForm.create({
          data: req.body,
        });
        res.status(201).json(userForm);
      } catch (error) {
        res.status(400).json({ error: 'Error creating user form' });
      }
      break;
    case 'GET':
      try {
        if (id) {
          // Fetch single form by ID
          const userForm = await prisma.userForm.findUnique({
            where: { id: parseInt(id, 10) },
          });
          if (!userForm) {
            return res.status(404).json({ error: 'User form not found' });
          }
          res.status(200).json(userForm);
        } else {
          // Fetch all forms
          const userForms = await prisma.userForm.findMany();
          res.status(200).json(userForms);
        }
      } catch (error) {
        res.status(500).json({ error: 'Error fetching user forms' });
      }
      break;
    case 'PATCH':
      try {
        const userForm = await prisma.userForm.update({
          where: { id: parseInt(id, 10) },
          data: req.body,
        });
        res.status(200).json(userForm);
      } catch (error) {
        res.status(400).json({ error: 'Error updating user form' });
      }
      break;
    case 'DELETE':
      try {
        const userForm = await prisma.userForm.delete({
          where: { id: parseInt(id, 10) },
        });
        res.status(200).json(userForm);
      } catch (error) {
        res.status(400).json({ error: 'Error deleting user form' });
      }
      break;
    default:
      res.setHeader('Allow', ['POST', 'GET', 'PATCH', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
