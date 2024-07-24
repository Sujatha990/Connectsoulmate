import { dummyData } from "@/app/utils/dummyData";
export class Authservice {
   static async register( data){
        console.log(data);
        return true;

    }
    static async getDummydata( data){
        console.log(data);
        return dummyData;

    }
}