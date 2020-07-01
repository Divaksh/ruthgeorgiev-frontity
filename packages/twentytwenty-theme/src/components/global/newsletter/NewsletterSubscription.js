import React from "react";
import {connect, styled} from "frontity";

import tw from 'tailwind.macro';


const NewsletterSubscription = ({actions}) => {


    return (

        <SubscriptionSection>
            <SubscriptionContainer>
                <SubscriptionText>
                    Join 31,000+ other and never miss out on new recipes, videos, tips and more.
                </SubscriptionText>
                <SubscriptionFormDiv1>
                    <SubscriptionFormDiv2>
                        <SubscriptionFormDiv3>
                            <SubscriptionFormInput
                                type='email'
                                placeholder='Enter your email'
                            />
                            <SiteFooterSubscribeFormButton>subscribe</SiteFooterSubscribeFormButton>
                        </SubscriptionFormDiv3>
                    </SubscriptionFormDiv2>
                </SubscriptionFormDiv1>
            </SubscriptionContainer>
        </SubscriptionSection>
    );
};

export default connect(NewsletterSubscription);


const SubscriptionSection = styled('div')`  ${tw`flex justify-center px-4 text-gray-100 bg-gray-800`}`;
const SubscriptionContainer = styled('div')`  ${tw`py-6`}`;
const SubscriptionText = styled('h2')`  ${tw`text-center font-bold`}`;
const SubscriptionFormDiv1 = styled('div')`  ${tw`flex justify-center mt-6`}`;
const SubscriptionFormDiv2 = styled('div')`  ${tw`bg-white rounded-lg`}`;
const SubscriptionFormDiv3 = styled('div')`  ${tw`flex flex-wrap justify-between`}`;
const SubscriptionFormInput = styled('input')`  ${tw`m-1 p-2 appearance-none rounded-full border-none text-gray-700 outline-none`}`;
const SiteFooterSubscribeFormButton = styled('button')`  ${tw`w-full m-1 p-2 bg-gray-800 text-gray-100 rounded-lg font-normal uppercase lg:w-auto`}`;

