import { IWebServiceProps, WebService } from "@swizzyweb/swizzy-web-service";
import { PageWebRouter } from "./routers/PageRouter/page-router.js";

export interface SwizzyFrontendTemplateWebServiceState {

}

export interface SwizzyFrontendTemplateWebServiceProps
  extends IWebServiceProps<SwizzyFrontendTemplateWebServiceState> {
  port: number;
  path?: string;
}

export class SwizzyFrontendTemplateWebService extends WebService<SwizzyFrontendTemplateWebServiceState> {
  constructor(props: SwizzyFrontendTemplateWebServiceProps) {
    super({
      ...props,
      name: "SwizzyFrontendTemplateWebService",
      path: props.path ?? "",
      packageName: "@swizzyweb/swizzy-frontend-template-web-service",
      routerClasses: [PageWebRouter],
      middleware: [],
    });
  }
}
