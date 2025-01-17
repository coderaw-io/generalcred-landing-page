import { GetFgtsBalanceRequest } from "@/@types/fgts/balance";
import { dataClient } from "@/lib/axios";

export class BalanceService {
  static async getFgtsBalance({
    name,
    cpf,
    phonenumber,
    email
  }: GetFgtsBalanceRequest) {
    try {
      const { data } = await dataClient.post("/fgts/balance", {
        name,
        cpf,
        phonenumber,
        email
      });

      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Request server error!");
    }
  }
}