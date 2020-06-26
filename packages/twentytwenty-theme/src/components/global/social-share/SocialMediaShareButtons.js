import React from 'react';
import {connect, styled} from "frontity";

import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    RedditShareButton,
    EmailShareButton,
} from 'react-share';

import {
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    LinkedinIcon,
    PinterestIcon,
    RedditIcon,
    EmailIcon,
} from 'react-share';
import tw from "tailwind.macro";

const SocialMediaShareButtons = ({url, media, alt, title, children, hashtag, hashtags}) => {

    return (
        <SocialMediaButtons>
            <ShareTitle>Share this with your friends</ShareTitle>
            <FacebookShareButton
                url={url}
                media={media}
                quote={title}
                hashtag={hashtag}
            >
                <FacebookIcon
                    size={40}
                    round={true}
                />
            </FacebookShareButton>

            <TwitterShareButton
                url={url}
                title={title}
                children={children}
                hashtags={hashtags}
            >
                <TwitterIcon
                    size={40}
                    round={true}
                />
            </TwitterShareButton>

            <PinterestShareButton
                media={media}
                description={alt}
                url={url}
                children={children}>
                <PinterestIcon
                    size={40}
                    round={true}
                />
            </PinterestShareButton>

            <LinkedinShareButton
                url={url}
                children={children}
            >
                <LinkedinIcon
                    size={40}
                    round={true}
                />
            </LinkedinShareButton>

            <WhatsappShareButton
                url={url}
                title={title}
                children={children}
            >
                <WhatsappIcon
                    size={40}
                    round={true}
                />
            </WhatsappShareButton>

            <RedditShareButton
                url={url}
                children={children}
                title={title}
            >
                <RedditIcon
                    size={40}
                    round={true}
                />
            </RedditShareButton>

            <EmailShareButton
                url={url}
                children={children}
                subject={title}
            >
                <EmailIcon
                    size={40}
                    round={true}
                />
            </EmailShareButton>
        </SocialMediaButtons>

    );
};

export default connect(SocialMediaShareButtons);
const SocialMediaButtons =styled('div')` ${tw`mt-10 text-center`}`;
const ShareTitle =styled('p')` ${tw`lowercase text-normal text-center p-0 m-0`}`;