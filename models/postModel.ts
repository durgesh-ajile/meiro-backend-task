import mongoose, { Document, Schema } from 'mongoose';

export interface IPost extends Document {
  timestamp: Date;
  title: string;
  message: string;
  context: string;
  location: string;
  numLikes: number;
  numBookmarks: number;
  numViews: number;
}

const PostSchema: Schema = new Schema({
  timestamp: { type: Date, default: Date.now },
  title: { type: String, required: true },
  message: { type: String, required: true },
  context: { type: String },
  location: { type: String },
  numLikes: { type: Number, default: 0 },
  numBookmarks: { type: Number, default: 0 },
  numViews: { type: Number, default: 0 },
});

const Post = mongoose.model<IPost>('Post', PostSchema);
export default Post;
