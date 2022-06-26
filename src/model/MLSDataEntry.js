import { addDays, format, getYear } from "date-fns";

export class MLSDataEntry {
  constructor(
    MLSNum,
    status,
    listPrice,
    salePrice,
    statusChangeDate,
    listDate,
    closingDate,
    DOM,
    pendingDate,
    REO,
    GLA, //GrossLivableArea
    stories,
    yearBuilt,
    poolType,
    concessions,
    landSqFt,
    landAcres,
    bedrooms,
    bathsFull,
    bathsHalf,
    garageCount,
    garageType,
    garage
  ) {
    this.MLSNum = MLSNum;
    this.status = status;
    this.listPrice = listPrice;
    this.salePrice = salePrice;
    this.statusChangeDate =
      statusChangeDate === "" ? statusChangeDate : new Date(statusChangeDate);
    this.listDate = listDate === "" ? listDate : new Date(listDate);
    this.closingDate = closingDate === "" ? closingDate : new Date(closingDate);
    this.DOM = DOM;
    this.pendingDate = pendingDate === "" ? pendingDate : new Date(pendingDate);
    this.REO = REO;
    this.GLA = GLA;
    this.stories = stories;
    this.yearBuilt = yearBuilt;
    this.poolType = poolType;
    this.concessions = concessions;
    this.landSqFt = landSqFt;
    this.landAcres = landAcres;
    this.bedrooms = bedrooms;
    this.bathsFull = bathsFull;
    this.bathsHalf = bathsHalf;
    this.garageCount = garageCount;
    this.garageType = garageType;
    this.garage = garage;
    //console.log(this.MLSNum, ": ", getYear(this.listDate));
  }

  MLSNum = "";
  status = "";
  listPrice = "";
  salePrice = "";
  statusChangeDate = "";
  listDate = "";
  closingDate = "";
  DOM = "";
  pendingDate = "";
  REO = "";
  GLA = "";
  stories = "";
  yearBuilt = "";
  poolType = "";
  concessions = "";
  landSqFt = "";
  landAcres = "";
  bedrooms = "";
  bathsFull = "";
  bathsHalf = "";
  garageCount = "";
  garageType = "";
  garage = "";
}
