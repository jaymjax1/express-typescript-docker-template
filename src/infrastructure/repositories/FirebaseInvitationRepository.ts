import { Invitation } from '@/domain/models/Invitation';
import { IInvitationRepository } from '@/domain/repositories/IInvitationRepository';
import { FirebaseApp } from 'firebase/app';
import { getFirestore, doc, setDoc, query, where, collection, getDocs } from 'firebase/firestore';

export class FirebaseInvitationRepository implements IInvitationRepository {
  private db;

  constructor(private readonly firebaseApp: FirebaseApp) {
    this.db = getFirestore(firebaseApp);
  }

  async save(invitation: Invitation): Promise<Invitation> {
    const docRef = doc(this.db, 'invitations', invitation.id);
    await setDoc(docRef, invitation);
    return invitation;
  }

  async findByEmail(email: string): Promise<Invitation | null> {
    const querySnapshot = await getDocs(
      query(collection(this.db, 'invitations'), where('email', '==', email))
    );
    return querySnapshot.docs.map((doc) => doc.data() as Invitation);
  }

  async findByPhoneNumber(phoneNumber: string): Promise<Invitation | null> {
    const querySnapshot = await getDocs(
      query(collection(this.db, 'invitations'), where('phoneNumber', '==', phoneNumber))
    );
    return querySnapshot.docs.map((doc) => doc.data() as Invitation);
  }

  async findByStatus(status: string): Promise<Invitation[]> {
    const querySnapshot = await getDocs(
      query(collection(this.db, 'invitations'), where('status', '==', status))
    );
    return querySnapshot.docs.map((doc) => doc.data() as Invitation);
  }

  async findByCreatedAt(createdAt: Date): Promise<Invitation[]> {
    const querySnapshot = await getDocs(
      query(collection(this.db, 'invitations'), where('createdAt', '==', createdAt))
    );
    return querySnapshot.docs.map((doc) => doc.data() as Invitation);
  }

  async findByUpdatedAt(updatedAt: Date): Promise<Invitation[]> {
    const querySnapshot = await getDocs(
      query(collection(this.db, 'invitations'), where('updatedAt', '==', updatedAt))
    );
    return querySnapshot.docs.map((doc) => doc.data() as Invitation);
  }
}
