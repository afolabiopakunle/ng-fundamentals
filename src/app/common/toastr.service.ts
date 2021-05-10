import { Injectable } from "@angular/core";
declare let toastr
@Injectable({providedIn: "root"})

export class ToastrService {

    success(data) {
        toastr.success(data)
    }
}