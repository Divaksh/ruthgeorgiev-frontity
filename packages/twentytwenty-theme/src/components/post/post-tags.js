import {connect, decode, styled} from "frontity";
import React, {Fragment} from "react";
import {TagIcon} from "../icons";
import Link from "../link";
import {PostMetaList, PostMetaWrapper} from "./post-meta";
import PostMetaItem from "./post-meta-item";
import tw from "tailwind.macro";

const PostTags = ({tags}) => {
    // Remove empty or undefined tags
    const postTags = tags.filter(Boolean);

    if (postTags.length === 0) {
        return null;
    }

    return (
        <PostMetaWrapper>
            <PostMetaList style={{justifyContent: "flex-start"}}>
                <PostMetaItem icon={TagIcon} label="Post Tags">
                    {postTags.map((tag, index) => {
                        const isLastTag = index === postTags.length - 1;
                        return (
                            <Fragment key={tag.id}>
                                <PostTag link={tag.link}>#{decode(tag.name)}</PostTag>
                            </Fragment>
                        );
                    })}
                </PostMetaItem>
            </PostMetaList>
        </PostMetaWrapper>
    );
};

export default connect(PostTags);

const PostTag = styled(Link)` ${tw`inline-block bg-gray-200 rounded-full px-3 py-1 text-gray-700 mr-2`}`;