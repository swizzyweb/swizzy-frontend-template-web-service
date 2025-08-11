import { FunnyJokeClient } from "./client/index.js";
import { SampleFrontendWebService } from "./web-service.js";

export interface GetSampleFrontendWebserviceProps {
  serviceArgs: {
    funnyJokeBaseUrl?: string;
  };
}
export async function getWebservice(
  props: GetSampleFrontendWebserviceProps & any,
) {
  const state = {
    funnyJokeClient: new FunnyJokeClient({
      baseUrl: props.serviceArgs.funnyJokeBaseUrl,
    }),
  };
  return new SampleFrontendWebService({
    ...props,
    ...props.serviceArgs,
    state,
  });
}
