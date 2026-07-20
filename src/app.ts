import { SwizzyFrontendTemplateWebService } from "./web-service.js";

export interface GetSwizzyFrontendTemplateWebserviceProps {
  serviceArgs: {};
}

export async function getWebservice(
  props: GetSwizzyFrontendTemplateWebserviceProps & any,
) {
  const state = {};
  return new SwizzyFrontendTemplateWebService({
    ...props,
    ...props.serviceArgs,
    state,
  });
}
