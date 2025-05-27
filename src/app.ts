import { SampleFrontendWebService } from "./web-service";

export interface GetSampleFrontendWebserviceProps {
  serviceArgs: any;
}

export async function getWebservice(
  props: GetSampleFrontendWebserviceProps & any,
) {
  return new SampleFrontendWebService({
    ...props,
    ...props.serviceArgs,
  });
}
