import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, getDocs, getDoc ,deleteDoc} from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  firestore: Firestore = inject(Firestore);

  constructor() { }

  public async getProducts(){
    const colRef = collection(this.firestore, 'products');
    const snap = await getDocs(colRef);

    return snap.docs.map((doc)=> ({
      ...doc.data(),
      id: doc.id,
    }));
  }

  public async getProduct(id){
    const colRef = collection(this.firestore, 'products');
    const docRef = doc(colRef,id);
    const snap = await getDoc(docRef);

    return({
      ...snap.data(),
      id: snap.id,
    });
  }

  public async addProduct(product){
    const colRef = collection(this.firestore,'products');
    return await addDoc(colRef, product);
  }
 
//  public async deleteproduct(id:string){
//    const docRef = doc(this.firestore,'products',id);
//    deleteDoc(docRef)
//    .then(()=>{
//     console.log("Data Deleted");
//    })
//  }

}

