import prisma from "@/app/lib/prismadb";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      try {
        const formTemplate = await prisma.formTemplate.create({
          data: {
            TemplateName: req.body.TemplateName,
            TemplateStructure: req.body.TemplateStructure,
          },
        });
        res.status(201).json(formTemplate);
      } catch (error) {
        res.status(400).json({ error: 'Error creating form template' });
      }
      break;
    case 'GET':
      try {
        const formTemplates = await prisma.formTemplate.findMany();
        res.status(200).json(formTemplates);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching form templates' });
      }
      break;
    case 'PATCH':
      try {
        const formTemplate = await prisma.formTemplate.update({
          where: { id: req.body.id },
          data: {
            TemplateName: req.body.TemplateName,
            TemplateStructure: req.body.TemplateStructure,
          },
        });
        res.status(200).json(formTemplate);
      } catch (error) {
        res.status(400).json({ error: 'Error updating form template' });
      }
      break;
    case 'DELETE':
      try {
        const formTemplate = await prisma.formTemplate.delete({
          where: { id: req.body.id },
        });
        res.status(200).json(formTemplate);
      } catch (error) {
        res.status(400).json({ error: 'Error deleting form template' });
      }
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' });
  }
}
