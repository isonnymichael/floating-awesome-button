<div class="fac animate__animated mt-6">
    <?php foreach ( $fab_to_display as $fab_item ) : ?>
        <?php
            /** Responsive */
            $responsiveClass  = ( $fab_item->getResponsive()['device']['mobile'] ) ? 'block ' : 'hidden ';
            $responsiveClass .= ( $fab_item->getResponsive()['device']['tablet'] ) ? 'sm:block ' : 'sm:hidden ';
            $responsiveClass .= ( $fab_item->getResponsive()['device']['desktop'] ) ? 'lg:block ' : 'lg:hidden ';
        ?>
        <a id="fab-link-<?php echo esc_attr( $fab_item->getID() ); ?>"
            <?php
            /** Data (ID) */
            echo sprintf( ' data-id="%s" ', esc_attr ( $fab_item->getID() ) );

            /** Data (Link Behavior) */
            echo ( 'link' === $fab_item->getType() && $fab_item->getLinkBehavior()) ?
                ' target="_blank"' : '';

            /** Href */
            echo ( in_array($fab_item->getType(), ['link']) ) ?
                sprintf( ' href="%s"', esc_url( $fab_item->getLink() ) ) : '';

            /** Class - Shape */
            $shapeClass = ($fab_item->getTemplate()['shape']!='none') ? $fab_item->getTemplate()['shape'] : $options->fab_design->template->shape;
            $shapeClass = sprintf('fab-template-shape-%s', $shapeClass);
            ?>
           class="fab-links cursor-pointer <?php echo sprintf( 'fab-link-type-%s', esc_attr( $fab_item->getType() ) ) ?> <?php echo esc_attr( $responsiveClass ); ?> <?php echo esc_attr( $shapeClass ); ?>"
        >
            <div class="bg-shape"></div>
            <?php if($options->fab_design->tooltip->enable): ?> <span class="fab-tooltip font-sans"><?php echo esc_attr( get_the_title( $fab_item->getID() ) ); ?></span> <?php endif;?>
            <em
                    title="<?php echo esc_attr( get_the_title( $fab_item->getID() ) ); ?>"
                    class="<?php echo empty( esc_attr( $fab_item->getIconClass() ) ) ? 'fas fa-circle' : esc_attr( $fab_item->getIconClass() ); ?>"
            >
            </em>
        </a>
        <style>
            <?php
                /** Button Color */
                if($fab_item->getTemplate()['color']){
                    $styles = sprintf(
                        '#fab-link-%s .bg-shape { background: %s; }',
                        $fab_item->getID(), $fab_item->getTemplate()['color']);
                    echo esc_attr($styles);
                }
                /** Icon Color */
                if($fab_item->getTemplate()['icon']['color']){
                    $styles = sprintf(
                        '#fab-link-%s em { color: %s; }',
                        $fab_item->getID(), $fab_item->getTemplate()['icon']['color']);
                    echo esc_attr($styles);
                }

                /** Tooltip */
                if($options->fab_design->tooltip->enable){
                    $tooltipColor = ( $fab_item->getTooltip()['color'] ) ? $fab_item->getTooltip()['color'] : $options->fab_design->template->color;
                    $tooltipFontColor = ( $fab_item->getTooltip()['font']['color'] ) ? $fab_item->getTooltip()['font']['color'] : $options->fab_design->template->icons->color;
                    $styles = sprintf('#fab-link-%s .fab-tooltip { background: %s; border-color: %s; color: %s; } ',
                        $fab_item->getID(), $tooltipColor, $tooltipColor, $tooltipFontColor );
                    if($options->fab_design->layout->position=='left'){
                        $styles .= sprintf(
                            '#fab-link-%s .fab-tooltip::after { border-color: transparent %s transparent transparent; } ',
                            $fab_item->getID(), $tooltipColor);
                    } else {
                        $styles .= sprintf(
                            '#fab-link-%s .fab-tooltip::after { border-color: transparent transparent transparent %s; } ',
                            $fab_item->getID(), $tooltipColor);
                    }
                    echo esc_attr($styles);
                }
            ?>
        </style>
    <?php endforeach; ?>
</div>


<input type="checkbox" id="fab-checkbox" />
<div class="fab
    <?php echo ($options->fab_design->template->shape) ? esc_attr( sprintf('fab-template-shape-%s', $options->fab_design->template->shape) ) : ''; ?>
    <?php echo ( $options->fab_animation->elements->fab !== 'ripple' ) ? sprintf( 'animate__animated animate__%s', esc_attr( $options->fab_animation->elements->fab ) ) : ''; ?>">
    <?php if ( $options->fab_animation->elements->fab === 'ripple' ) : ?>
        <div class="animation-ripple" style="background: <?php echo esc_attr( $options->fab_design->template->color ); ?>;"></div>
        <div class="animation-ripple" style="background: <?php echo esc_attr( $options->fab_design->template->color ); ?>; animation-delay: 0.6s;"></div>
    <?php endif; ?>
    <em class="<?php echo esc_attr( $options->fab_design->template->icons->class ); ?>"></em>
    <div class="bg-shape"></div>
</div>
<style>
    <?php
        /** FAB Button Styling */
        $styles = sprintf( 'div.fab { background: %s; } ', $options->fab_design->template->color ); // Button Color.
        $styles .= sprintf( 'div.fab em { color: %s; } ', $options->fab_design->template->icons->color ); // Button Icon Color.
        echo esc_attr( $styles );

        /** FAB Button Styling Custom Shape */
        if($options->fab_design->template->name==='shape'){
            $styles = sprintf( 'background: %s !important;  ', $options->fab_design->template->color);
            $styles = sprintf('div.fab .bg-shape { %s }', $styles);
            echo esc_attr($styles);
        }
    ?>
</style>