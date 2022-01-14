<div class="sm:flex font-sans gap-4">
    <?php
        $featuredImage = get_the_post_thumbnail_url($fab_item->getID(), 'large');
        if($featuredImage):
    ?>
        <div class="featured-img-container flex-none sm:w-1/2 relative">
            <img src="<?php echo esc_url($featuredImage); ?>"
                 alt="<?php echo $fab_item->getTitle() ?> Cover"
                 class="sm:absolute inset-0 object-cover"
                 style="width:100%; height:100%;"
            />
        </div>
    <?php endif; ?>
    <div class="flex-auto">
        <?php echo do_shortcode( $content ); ?>
    </div>
</div>
