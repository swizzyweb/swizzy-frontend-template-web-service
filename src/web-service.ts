import { IWebServiceProps, WebService } from "@swizzyweb/swizzy-web-service";
import { PageWebRouter } from "./routers/PageRouter/page-router";
import { ApiWebRouter } from "./routers/ApiRouter/api-router";
import { FunnyJokeClient, IFunnyJokeClient } from "./client";

export interface SampleFrontendWebServiceState {
  funnyJokeClient: IFunnyJokeClient;
}

export interface SampleFrontendWebServiceProps
  extends IWebServiceProps<SampleFrontendWebServiceState> {
  port: number;
  path?: string;
}

export class SampleFrontendWebService extends WebService<SampleFrontendWebServiceState> {
  constructor(props: SampleFrontendWebServiceProps) {
    super({
      ...props,
      name: "SampleFrontendWebService",
      path: props.path ?? "",
      packageName: "@swizzyweb/swizzy-frontend-template-web-service",
      routerClasses: [PageWebRouter, ApiWebRouter],
      middleware: [],
    });
  }
}
