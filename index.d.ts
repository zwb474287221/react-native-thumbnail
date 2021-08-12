declare module "react-native-thumbnail-zwb" {

  type Thumbnail = {
    path: string;
    width: number;
    height: number;
  }

  type RNThumbnail = {
    get(path: string): Promise<Thumbnail>
  }

  const RNThumbnail: RNThumbnail;

  export default RNThumbnail;
}
