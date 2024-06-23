import React from 'react';
import styled from 'styled-components';
import { Colors } from '../style/Colors';
import { Wallet, getWallets } from '@talismn/connect-wallets';

const DAPP_NAME = "Talismã Network";

const MyWalletSelector = () => {
    const supportedWallets: Wallet[] = getWallets();
    console.log(supportedWallets);
    return (
        <div>
            {
                supportedWallets.map((wallet: Wallet) => {
                    return (
                        <button
                            key={wallet.extensionName}
                            onClick={async () => {
                                try {
                                    await wallet.enable(DAPP_NAME);
                                    const unsubscribe = await wallet.subscribeAccounts((accounts) => {
                                        console.log(accounts);
                                        // Save accounts...
                                        // Also save the selected wallet name as well...
                                    });
                                } catch (err) {
                                    // Handle error. Refer to `libs/wallets/src/lib/errors`
                                }
                            }}
                        >
                            Connect to {wallet.title}
                        </button>
                    );
                })
            }
        </div>
    );
};

export default function PageHome() {
    return (
        <HomePage>
            <Header>
                <img src="/logo-bee.svg" alt="" />
            </Header>
            <HeroText>
                Camada de dados on-chain <span>interoperável</span>, rápida e segura para verificação de meios de pagamento
            </HeroText>
            <MyWalletSelector />
        </HomePage>
    );
}



const HomePage = styled.main`
                background-color: ${Colors.main};
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                min-height: 100svh;
                `;

const Header = styled.header`
                width: 100%;
                display: flex;
                justify-content: flex-end;
                padding: 20px;
                position: fixed;
                left: 0;
                top: 0;
                height: 100px;

                `;

const HeroText = styled.h1`
                text-align: center;
                font-family: "Inter";
                font-size: 72px;
                font-style: normal;
                font-weight: 370;
                line-height: 110%; /* 79.2px */
                letter-spacing: -1.44px;


                background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0.43) 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;


                span{
                    color:${Colors.yellow};
                font-family: "Inter";
                font-size: 72px;
                font-style: normal;
                font-weight: 370;
                line-height: 110%;
                letter-spacing: -1.44px;
                background:${Colors.yellow};
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
    }
                `;;