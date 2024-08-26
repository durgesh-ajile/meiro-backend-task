import { Request, Response } from 'express';
import Post, { IPost } from '../models/postModel';

export const createPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const post: IPost = new Post(req.body);
    await post.save();
    setTimeout(() => res.status(201).json(post), 500); // Simulate delay
  } catch (error) {
    res.status(500).json({ message: 'Error creating post' });
  }
};

export const searchPosts = async (req: Request, res: Response): Promise<void> => {
  const { query } = req.query;
  try {
    const posts = await Post.find({ title: { $regex: query, $options: 'i' } });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error searching posts' });
  }
};

export const getPostCount = async (req: Request, res: Response): Promise<void> => {
  try {
      const postCount = await Post.countDocuments({});
      res.status(201).json({ message: postCount });
  } catch (error) {
      console.error('Error counting documents:', error);
  }
};
