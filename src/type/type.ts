export type LoginTypes = {
  nama: string;
  password: string;
};

export interface CommentTypes {
  nama: string;
  comment: string;
}

export interface CommentsTypes {
  id: number;
  nama: string;
  comment: string;
  createdAt: Date;
}

export interface CreateUserTypes {
  nama: string;
  password: string;
}

export interface CreateUndanganTypes {
  namaundangan: string;
}
