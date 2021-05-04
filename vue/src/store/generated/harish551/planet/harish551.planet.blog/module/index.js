// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateTimedoutPost } from "./types/blog/tx";
import { MsgDeleteSentPost } from "./types/blog/tx";
import { MsgDeleteTimedoutPost } from "./types/blog/tx";
import { MsgDeletePost } from "./types/blog/tx";
import { MsgUpdatePost } from "./types/blog/tx";
import { MsgCreateSentPost } from "./types/blog/tx";
import { MsgSendIbcPost } from "./types/blog/tx";
import { MsgUpdateTimedoutPost } from "./types/blog/tx";
import { MsgUpdateSentPost } from "./types/blog/tx";
import { MsgCreatePost } from "./types/blog/tx";
const types = [
    ["/harish551.planet.blog.MsgCreateTimedoutPost", MsgCreateTimedoutPost],
    ["/harish551.planet.blog.MsgDeleteSentPost", MsgDeleteSentPost],
    ["/harish551.planet.blog.MsgDeleteTimedoutPost", MsgDeleteTimedoutPost],
    ["/harish551.planet.blog.MsgDeletePost", MsgDeletePost],
    ["/harish551.planet.blog.MsgUpdatePost", MsgUpdatePost],
    ["/harish551.planet.blog.MsgCreateSentPost", MsgCreateSentPost],
    ["/harish551.planet.blog.MsgSendIbcPost", MsgSendIbcPost],
    ["/harish551.planet.blog.MsgUpdateTimedoutPost", MsgUpdateTimedoutPost],
    ["/harish551.planet.blog.MsgUpdateSentPost", MsgUpdateSentPost],
    ["/harish551.planet.blog.MsgCreatePost", MsgCreatePost],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee = defaultFee, memo = null }) => memo ? client.signAndBroadcast(address, msgs, fee, memo) : client.signAndBroadcast(address, msgs, fee),
        msgCreateTimedoutPost: (data) => ({ typeUrl: "/harish551.planet.blog.MsgCreateTimedoutPost", value: data }),
        msgDeleteSentPost: (data) => ({ typeUrl: "/harish551.planet.blog.MsgDeleteSentPost", value: data }),
        msgDeleteTimedoutPost: (data) => ({ typeUrl: "/harish551.planet.blog.MsgDeleteTimedoutPost", value: data }),
        msgDeletePost: (data) => ({ typeUrl: "/harish551.planet.blog.MsgDeletePost", value: data }),
        msgUpdatePost: (data) => ({ typeUrl: "/harish551.planet.blog.MsgUpdatePost", value: data }),
        msgCreateSentPost: (data) => ({ typeUrl: "/harish551.planet.blog.MsgCreateSentPost", value: data }),
        msgSendIbcPost: (data) => ({ typeUrl: "/harish551.planet.blog.MsgSendIbcPost", value: data }),
        msgUpdateTimedoutPost: (data) => ({ typeUrl: "/harish551.planet.blog.MsgUpdateTimedoutPost", value: data }),
        msgUpdateSentPost: (data) => ({ typeUrl: "/harish551.planet.blog.MsgUpdateSentPost", value: data }),
        msgCreatePost: (data) => ({ typeUrl: "/harish551.planet.blog.MsgCreatePost", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
