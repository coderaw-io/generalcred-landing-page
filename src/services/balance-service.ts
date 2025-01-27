import { FgtsBalanceRequest } from "@/@types/fgts/loan";
import { dataClient } from "@/lib/axios";

export class BalanceService {
  static async getFgtsLoanBalance({
    cpf,
    installments,
    rate,
  }: FgtsBalanceRequest) {
    try {
      const { data } = await dataClient.post("/fgts/balance", {
        cpf,
        installments,
        rate
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("general:access_token")}`
        }
      });

      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Request server error!");
    }
  }
}