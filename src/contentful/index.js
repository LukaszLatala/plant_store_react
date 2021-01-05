import * as contentful from "contentful";

import { spaceId, contentDeliveryId } from "../Keys/Keys";

export const client = contentful.createClient({
  space: spaceId,
  accessToken: contentDeliveryId,
});
