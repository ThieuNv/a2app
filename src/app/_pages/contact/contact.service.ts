import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

  private listAddress: string[] = [
    "14b Kim dong, Cau Set",
    "232 ngo 41, pho Tam Trinh, Phuong Hoang Mai",
    "89a Bach Mai, Giai Phong, Giap Bat"
  ];

  private listPhoneNumber: string[] = [
    "0984 003 349",
    "0321 543 268",
    "0988 888 303",
    "0159 258 147",
  ];

  constructor() { }

  getListAddress(): string[] {
    return this.listAddress;
  }

  getListPhoneNumber(): string[] {
    return this.listPhoneNumber;
  }
}
