import creditCardsSvg from 'public/categoriesIcons/credit-cards.svg';
import carSvg from 'public/categoriesIcons/car.svg';
import broadBandSvg from 'public/categoriesIcons/broadband-and-nbn.svg';
import cashSvg from 'public/categoriesIcons/cash.svg';
import cryptoSvg from 'public/categoriesIcons/crypto.svg';
import electricitySvg from 'public/categoriesIcons/electricity-and-gas.svg';
import healthInsuranceSvg from 'public/categoriesIcons/health-insurance.svg';
import highInterestSvg from 'public/categoriesIcons/high-interest-savings.svg';
import homeSvg from 'public/categoriesIcons/home.svg';
import lifeInsuranceSvg from 'public/categoriesIcons/life-insurance.svg';
import mobilePlansSvg from 'public/categoriesIcons/mobile-plans.svg';
import moneyTransfersSvg from 'public/categoriesIcons/money-transfers.svg';
import personalLoansSvg from 'public/categoriesIcons/personal-loans.svg';
import petInsuranceSvg from 'public/categoriesIcons/pet-insurance.svg';
import shareTradingSvg from 'public/categoriesIcons/share-trading.svg';
import shoppingDealsSvg from 'public/categoriesIcons/shopping-deals.svg';
import shortLoansSvg from 'public/categoriesIcons/short-term-loans.svg';
import superFundsSvg from 'public/categoriesIcons/super-funds.svg';
import streamingSvg from 'public/categoriesIcons/streaming.svg';
import transactionAccSvg from 'public/categoriesIcons/transaction-accounts.svg';
import travelDealsSvg from 'public/categoriesIcons/travel-deals.svg';
import travelInsuranceSvg from 'public/categoriesIcons/travel-insurance.svg';

const ICON_HREF = "https://www.finder.com.au/";


type TCategoryTileProps = {
    title : string,
    icon : string,
    href : string,
}

const categoriesTilesData : Array<TCategoryTileProps> = [
    {
        title : 'Credit Cards',
        icon : creditCardsSvg,
        href : ICON_HREF
    },
    {
        title : 'Home Loans',
        icon : homeSvg,
        href : ICON_HREF
    },
    {
        title : 'Health Insurance',
        icon : healthInsuranceSvg,
        href : ICON_HREF
    },
    {
        title : 'Car Insurance',
        icon : carSvg,
        href : ICON_HREF
    },
    {
        title : 'High-Interest Savings',
        icon : highInterestSvg,
        href : ICON_HREF
    },
    {
        title : 'Electricity & Gas',
        icon : electricitySvg,
        href : ICON_HREF
    },
    {
        title : 'Personal Loans',
        icon : personalLoansSvg,
        href : ICON_HREF
    },
    {
        title : 'Mobile Plans',
        icon : mobilePlansSvg,
        href : ICON_HREF
    },
    {
        title : 'Broadband & NBN',
        icon : broadBandSvg,
        href : ICON_HREF
    },
    {
        title : 'Super Funds',
        icon : superFundsSvg,
        href : ICON_HREF
    },
    {
        title : 'Share Trading',
        icon : shareTradingSvg,
        href : ICON_HREF
    },
    {
        title : 'Life Insurance',
        icon : lifeInsuranceSvg,
        href : ICON_HREF
    },
    {
        title : 'Home Insurance',
        icon : homeSvg,
        href : ICON_HREF
    },
    {
        title : 'Travel Insurance',
        icon : travelInsuranceSvg,
        href : ICON_HREF
    },
    {
        title : 'Travel Deals',
        icon : travelDealsSvg,
        href : ICON_HREF
    },
    {
        title : 'Crypto',
        icon : cryptoSvg,
        href : ICON_HREF
    },
    {
        title : 'Car Loans',
        icon : carSvg,
        href : ICON_HREF
    },
    {
        title : 'Pet Insurance',
        icon : petInsuranceSvg,
        href : ICON_HREF
    },
    {
        title : 'Transaction Accounts',
        icon : transactionAccSvg,
        href : ICON_HREF
    },
    {
        title : 'Money Transfer',
        icon : moneyTransfersSvg,
        href : ICON_HREF
    },
    {
        title : 'Shopping Deals',
        icon : shoppingDealsSvg,
        href : ICON_HREF
    },
    {
        title : 'Streaming',
        icon : streamingSvg,
        href : ICON_HREF
    },
    {
        title : 'Business Insurance',
        icon : cashSvg,
        href : ICON_HREF
    },
    {
        title : 'Short Term Loans',
        icon : shortLoansSvg,
        href : ICON_HREF
    },
]