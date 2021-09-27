<template>
  <div class="home">
    <div class="name">Skills</div>
    <div class="links">
      <a href="https://twitter.com/Skills__Project">Twitter</a>
      <a
        href="https://etherscan.io/address/0xE8e7b0FEc64eB11eA5cCE0548083Bd68aCE3CB5d"
        >Contract</a
      >
      <a href="https://discord.com/invite/PdjRbZyWWb">Discord</a>
    </div>
    <div class="mint-box">
      <a class="btn-mint" @click="mint" v-if="isLogin" href="javascript:void(0)"
        >Mint NFT</a
      >
      <a
        href="javascript:void(0)"
        v-else
        @click="connectWalletAct"
        class="btn-mint"
        >Connect Wallet</a
      >
    </div>
    <div class="preview">
      <div class="preview-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin meet"
          viewBox="0 0 350 350"
        >
          <rect width="100%" height="100%" fill="black" />
          <text x="10" y="40" class="base">Backstab</text>
          <text x="10" y="80" class="base">Burning Arrow</text>
          <text x="10" y="120" class="base">Sinking Sand</text>
          <text x="10" y="160" class="base">Raise Dead</text>
          <text x="10" y="200" class="base">Touch of Sorrow</text>
          <text x="10" y="240" class="base">Healing Current</text>
          <text x="10" y="280" class="base">Hymn of Protection</text>
          <text x="10" y="320" class="base">Counter</text>
          <text x="260" y="320" class="base">#1516</text>
        </svg>
      </div>

      <div class="preview-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin meet"
          viewBox="0 0 350 350"
        >
          <rect width="100%" height="100%" fill="black" />
          <text x="10" y="40" class="base">Skull Bash</text>
          <text x="10" y="80" class="base">Tranquilizing Dart</text>
          <text x="10" y="120" class="base">Firestorm</text>
          <text x="10" y="160" class="base">Bolt of Rage</text>
          <text x="10" y="200" class="base">Morbid Sun</text>
          <text x="10" y="240" class="base">Restoring Wind</text>
          <text x="10" y="280" class="base">Scent of Blood</text>
          <text x="10" y="320" class="base">Shield Block</text>
          <text x="260" y="320" class="base">#8301</text>
        </svg>
      </div>

      <div class="preview-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin meet"
          viewBox="0 0 350 350"
        >
          <rect width="100%" height="100%" fill="black" />
          <text x="10" y="40" class="base">Cleave</text>
          <text x="10" y="80" class="base">Nish's Poison Arrow</text>
          <text x="10" y="120" class="base">Frozen Heart</text>
          <text x="10" y="160" class="base">Light of the Moon</text>
          <text x="10" y="200" class="base">Curse of the Ape</text>
          <text x="10" y="240" class="base">Healing Touch</text>
          <text x="10" y="280" class="base">Scent of Blood</text>
          <text x="10" y="320" class="base">Shield Block</text>
          <text x="260" y="320" class="base">#8400</text>
        </svg>
      </div>
    </div>

    <div class="options">
      Created By <a href="https://twitter.com/0xTYZ">0xTYZ</a>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["isLogin", "address"]),
  },
  mounted() {
    let loginAddress = window.localStorage.getItem("skills_connected_address");
    if (loginAddress) {
      this.login(loginAddress);
    }
  },
  methods: {
    ...mapMutations(["login"]),
    mint() {
      this.$api.Skills.mint(this.address)
        .then(() => {
          this.$msg.success("mint success");
        })
        .catch((e) => {
          this.$msg.error(e.message);
        });
    },
    async connectWalletAct() {
      if (typeof window.ethereum === "undefined") {
        this.$msg.error("please install metamask");
        return;
      }

      const chainId = parseInt(
        await window.ethereum.request({
          method: "eth_chainId",
        })
      );

      if (chainId !== 1) {
        this.$msg.error("please swtich main network");
        return;
      }

      // 获取账号
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          this.$msg.success("success");

          let address = accounts[0];

          window.localStorage.setItem("skills_connected_address", address);

          this.login(address);
        })
        .catch((e) => {
          this.$msg.error(e.message);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.name {
  width: 100%;
  height: auto;
  float: left;
  margin-top: 30px;
  font-size: 5rem;
  text-align: center;
}

.links {
  width: 100%;
  height: auto;
  float: left;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;

  a {
    color: white;
    font-size: 22px;
    margin-left: 10px;
    margin-right: 10px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.mint-box {
  width: 100%;
  height: auto;
  float: left;
  text-align: center;
  box-sizing: border-box;
  padding-top: 50px;
  padding-bottom: 50px;

  .btn-mint {
    display: inline-block;
    padding: 15px 55px;
    color: white;
    background-color: #f56c6c;
    border-color: #f56c6c;
    font-size: 20px;
    border-radius: 4px;
    text-decoration: none;

    &:hover {
      background-color: rgba(#f56c6c, 0.9);
    }
  }
}

.preview {
  width: 100%;
  height: auto;
  float: left;
  padding-bottom: 30px;
  text-align: center;

  .preview-item {
    display: inline-block;
    width: 350px;
    height: 350px;
    margin-left: 15px;
    margin-right: 15px;

    .base {
      fill: white;
      font-size: 20px;
      font-family: EB Garamond, serif, sans-serif;
    }
  }
}

.options {
  width: 100%;
  height: auto;
  float: left;
  color: #838383;
  font-size: 20px;
  text-align: center;

  a {
    color: #838383;
  }
}
</style>