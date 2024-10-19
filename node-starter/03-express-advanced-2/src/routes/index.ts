import { Router, Request, Response } from 'express';

const router = Router();

/**
 * @swagger
 * /api/example:
 *   get:
 *     summary: Retrieve an example
 *     description: Retrieve an example message from the API
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Hello Swagger!
 */
router.get("/example", (req, res) => {
    res.status(200).send("Hello Swagger!");
});

/**
 * @swagger
 * /api/users:
 *  get:
 *      summary: Retrieve a list of users
 *      description: Retrieve a list of users from the system
 *      responses:
 *          '200':
 *              description: A list of users
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  id:
 *                                      type: integer
 *                                      example: 1
 *                                  name:
 *                                      type: string
 *                                      example: John Doe
 */
router.get('/users', (req: Request, res: Response) => {
    res.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' }
    ]);
});

export default router;