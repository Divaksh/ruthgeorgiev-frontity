import {connect, styled, decode} from "frontity";
import React, {Fragment, useEffect} from "react";
import Article from "../post/post-item-preview";
import ArchiveHeader from "./archive-header";
import Pagination from "./archive-pagination";
import PostSeparator from "../post/post-separator";
import Post from "../post";
import RecipeTaxonomies from "../global/taxonomies/RecipeTaxonomies/RecipeTaxonomies";
import tw from "tailwind.macro";
import Link from "../link"
import DeleteIcon from "../global/icons/DeleteIcon";


const Archive = ({state, showExcerpt, showMedia}) => {
    // Get the data of the current list.
    const data = state.source.get(state.router.link);
    const {primary} = state.theme.colors;

    // Whether the show the excerpt instead of the full content
    // If passed as prop, we'll respect that. Else, we'll use the theme settings
    const _showExcerpt = showExcerpt || !state.theme.showAllContentOnArchive;
    useEffect(() => {
        Post.preload();
    }, []);


    // Get all taxonomies
    const taxonomies = state.source.taxonomies;

    /**
     * The item's cuisine is an array of each cuisine id
     * So, we'll look up the details of each cuisine in allCuisine
     */

    return (
        <>

            {/* If the post has categories, render the categories */}
            {taxonomies && data.isPostArchive && <RecipeTaxonomies taxonomies={taxonomies}/>}


            {/* If the list is a taxonomy, we render a title. */}
            {data.isTaxonomy && (
                <ArchiveHeader labelColor={primary} label={data.taxonomy}>

                    <TaxonomyTagButton link="/recipes">

                        <span>{decode(state.source[data.taxonomy][data.id].name)}</span>

                            <DeleteIcon/>

                    </TaxonomyTagButton>
                </ArchiveHeader>
            )}

            {/* If the list is for a specific author, we render a title. */}
            {data.isAuthor && (
                <ArchiveHeader labelColor={primary} label="Author">
                    <b>{decode(state.source.author[data.id].name)}</b>
                </ArchiveHeader>
            )}

            {/* Iterate over the items of the list. */}
            {data.items.map(({type, id}, index) => {
                const isLastArticle = index === data.items.length - 1;
                const item = state.source[type][id];

                // Render one Item component for each one.
                return (
                    <Fragment key={item.id}>
                        <Article
                            key={item.id}
                            item={item}
                            showExcerpt={_showExcerpt}
                            showMedia={showMedia}
                        />
                    </Fragment>
                );
            })}

            {data.totalPages > 1 && (
                <>
                    <PostSeparator/>
                    <Pagination size="thin"/>
                </>
            )}
        </>
    );
};

export default connect(Archive);


const TaxonomyTagButton = styled(Link)` ${tw`bg-gray-300 hover:bg-gray-400 text-gray-800 font-normal py-2 px-4 no-underline rounded inline-flex items-center`}`;





