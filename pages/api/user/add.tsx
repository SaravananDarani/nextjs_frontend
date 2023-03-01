import connectMongo from "../../../lib/mongodb"
import User from "../../../lib/model/userModel";
/**     
 * 
 * @param {import('next').NextApiRequest } req 
 * @param {import('next').NextApiResponse } res 
 */
export default async function addUser(req: any, res: any) {
    try {
        await connectMongo();
        const test = await User.create(req.body);
        res.json({ test });
    } catch (error) {
        res.json({ error });
    }
}