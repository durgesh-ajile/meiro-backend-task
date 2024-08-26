import { Router } from 'express';
import { createPost, searchPosts, getPostCount } from '../controllers/postController';

const router: Router = Router();

router.post('/', createPost);
router.get('/search', searchPosts);
router.get('/count', getPostCount);

export default router;
