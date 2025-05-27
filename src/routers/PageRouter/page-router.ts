import {
  IWebRouterProps,
  RequestIdMiddleware,
  RequestLoggerMiddleware,
  StateConverter,
  StateConverterProps,
  SwizzyRequestMiddleware,
  WebRouter,
} from "@swizzyweb/swizzy-web-service";
import { SampleFrontendWebServiceState } from "../../web-service";
import path from "path";
// @ts-ignore
import express from "@swizzyweb/express";
export interface PageRouterState {}

export interface PageRouterProps
  extends IWebRouterProps<SampleFrontendWebServiceState, PageRouterState> {}
export class PageWebRouter extends WebRouter<
  SampleFrontendWebServiceState,
  PageRouterState
> {
  constructor(props: PageRouterProps) {
    super({
      ...props,
      name: "PageWebRouter",
      path: "",
      stateConverter: PageRouterStateConverter,
      webControllerClasses: [],
      middleware: [
        SwizzyRequestMiddleware,
        RequestIdMiddleware,
        RequestLoggerMiddleware,
        () => express.static(path.join(__dirname, "../../../bundle")),
      ],
    });
  }
}

const PageRouterStateConverter: StateConverter<
  SampleFrontendWebServiceState,
  PageRouterState
> = async function (
  props: StateConverterProps<SampleFrontendWebServiceState>,
): Promise<PageRouterState> {
  return { ...props.state };
};
