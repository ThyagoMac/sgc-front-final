// /services/ContractServices.ts

import { Contract } from "../types/Contract";
import api from "./api/axios";

export const getContracts = async (): Promise<Contract[]> => {
  try {
    const response = await api.get<Contract[]>("/users");
    return response.data;
  } catch (error) {
    console.error("Erro ao recuperar a lista de contratos:", error);
    throw error;
  }
};
