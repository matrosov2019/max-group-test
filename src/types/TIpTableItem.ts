export type TIpTableItem = {
   ip: string;
   country: string;
   city: string;
   countryCode: string;
   status: "success" | "loading" | "error";
}