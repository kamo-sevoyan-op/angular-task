import { Injectable } from "@angular/core";
import { User } from "./user/user.model";
import { filter } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class UsersService {
    private data: ({id: string} & User)[] = [
        {
            id: "0",
            email: "kamo.sevoyan.am@gmail.com",
            dateOfBirth: "1998 06 13",
            firstName: "Kamo",
            middleName: "Koryun",
            lastName: "Sevoyan",
            isActivated: "activated",
            profileImageUrl: "localhost:4000/img.png",
            nationality: "armenian",
            phoneNumber: "+37493047450",
            gender: "male",
            mainLanguage: "en",
            recitations: "none"
        }
    ]

    getDataById(userId: string){
        return this.data!.find((user) => user.id === userId);
    }
}