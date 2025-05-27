import {
  DefaultStateExporter,
  IWebControllerInitProps,
  IWebControllerProps,
  RequestMethod,
  WebController,
  WebControllerFunction,
} from "@swizzyweb/swizzy-web-service";
import { ApiRouterState, ApiWebRouter } from "../api-router";
// @ts-ignore
import { Request, Response, json } from "@swizzyweb/express";
import path from "path";

export interface FunnyJokeControllerState {}

export interface FunnyJokeControllerProps
  extends IWebControllerProps<ApiRouterState, FunnyJokeControllerState> {}

export class FunnyJokeController extends WebController<
  ApiRouterState,
  FunnyJokeControllerState
> {
  constructor(props: FunnyJokeControllerProps) {
    super({
      ...props,
      name: "FunnyJokeController",
      action: "funnyJoke",
      method: RequestMethod.get,
      stateConverter: DefaultStateExporter,
      middleware: [],
    });
  }

  protected async getInitializedController(
    props: IWebControllerInitProps<ApiRouterState> & {
      state: FunnyJokeControllerState | undefined;
    },
  ): Promise<WebControllerFunction> {
    const logger = this.logger;
    const getState = this.getState.bind(this);
    return async function (req: Request, res: Response) {
      logger.info("We got a jokster lookin for jokes!");
      res.json({
        message: "Here's your funny joke",
        joke: "Funny Jokes are not funny!",
      });
    };
  }
}
