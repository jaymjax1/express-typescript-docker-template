import { User } from '@/domain/models/User';
import { IUserRepository } from '@/domain/repositories/IUserRepository';
import { FirebaseApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  query,
  where,
  collection,
  getDocs,
} from 'firebase/firestore';

export class FirebaseUserRepository implements IUserRepository {
  private db;

  constructor(firebaseApp: FirebaseApp) {
    this.db = getFirestore(firebaseApp);
  }

  async findById(id: string): Promise<User | null> {
    const docRef = doc(this.db, 'users', id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return null;
    }

    const data = docSnap.data();
    return new User(
      docSnap.id,
      data.email,
      data.password,
      data.createdAt.toDate(),
      data.updatedAt.toDate()
    );
  }

  async findByEmail(email: string): Promise<User | null> {
    const q = query(collection(this.db, 'users'), where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null;
    }

    const doc = querySnapshot.docs[0];
    const data = doc.data();
    return new User(
      doc.id,
      data.email,
      data.password,
      data.createdAt.toDate(),
      data.updatedAt.toDate()
    );
  }

  async save(user: User): Promise<void> {
    await setDoc(doc(this.db, 'users', user.getId()), {
      email: user.getEmail(),
      password: user.getPassword(), // Note: Ensure password is hashed before saving
      createdAt: user.getCreatedAt(),
      updatedAt: user.getUpdatedAt(),
    });
  }

  async delete(id: string): Promise<void> {
    await deleteDoc(doc(this.db, 'users', id));
  }
}
