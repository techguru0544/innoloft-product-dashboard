interface configDataObjectType {
  id: number;
  logo: string;
  mainColor: string;
  hasUserSection: string;
}

export interface appConfigType {
  loader: boolean;
  configsData: configDataObjectType;
}
