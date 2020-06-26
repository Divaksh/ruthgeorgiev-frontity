import React from 'react';
import {connect, styled} from "frontity";
import tw from "tailwind.macro";
import StopWatch from "../../global/icons/png/StopWatch.png"

const RecipePreparationTime = ({state, id}) => {

    const post = state.source.post[id];

    const time = post.acf['postfieldgroup.preparation_time'];

    return (
        <PreparationTime>
            <PreparationTimeIcon src={StopWatch}/>
            <PreparationTimeTitle>Preparation Time</PreparationTimeTitle>
            <PreparationTimeValue>
                {time}<span> min.</span>
            </PreparationTimeValue>
        </PreparationTime>
    );
};

export default connect(RecipePreparationTime);


const PreparationTime = styled('div')` ${tw`px-5 inline-block`}`;
const PreparationTimeTitle = styled('p')` ${tw`p-0 m-0 text-center`}`;
const PreparationTimeValue = styled('p')` ${tw`p-0 m-0 text-center`}`;

const PreparationTimeIcon = styled('img')` ${tw`inline-block w-24 align-bottom`}`;