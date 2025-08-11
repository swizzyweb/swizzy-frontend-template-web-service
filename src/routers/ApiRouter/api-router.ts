import {
  IWebRouterProps,
  RequestIdMiddleware,
  RequestLoggerMiddleware,
  StateConverter,
  StateConverterProps,
  SwizzyRequestMiddleware,
  WebRouter,
} from "@swizzyweb/swizzy-web-service";
import { SampleFrontendWebServiceState } from "../../web-service.js";
import path from "path";
// @ts-ignore
import express from "@swizzyweb/express";
import { FunnyJokeController } from "./controllers/funny-joke-controller.js";
import { IFunnyJokeClient } from "../../client/index.js";
export interface ApiRouterState {
  funnyJokeClient: IFunnyJokeClient;
}

export interface ApiRouterProps
  extends IWebRouterProps<SampleFrontendWebServiceState, ApiRouterState> {}
export class ApiWebRouter extends WebRouter<
  SampleFrontendWebServiceState,
  ApiRouterState
> {
  constructor(props: ApiRouterProps) {
    super({
      ...props,
      name: "ApiWebRouter",
      path: "api",
      stateConverter: ApiRouterStateConverter,
      webControllerClasses: [FunnyJokeController],
      middleware: [
        SwizzyRequestMiddleware,
        RequestIdMiddleware,
        RequestLoggerMiddleware,
      ],
    });
  }
}

const ApiRouterStateConverter: StateConverter<
  SampleFrontendWebServiceState,
  ApiRouterState
> = async function (
  props: StateConverterProps<SampleFrontendWebServiceState>,
): Promise<ApiRouterState> {
  return { ...props.state };
};
