<div id="fab-scroll-to-top"
     class="fab-standalone fab-scroll-to-top fab-links <?php echo ($options->fab_design->template->shape) ? esc_attr( sprintf('fab-template-shape-%s', $options->fab_design->template->shape) ) : ''; ?> cursor-pointer animate__animated"
    <?php echo sprintf( ' data-id="%s" ', esc_attr( $fab_scroll_to_top->getID() ) ); ?> >
    <em class="<?php echo empty( esc_attr( $fab_scroll_to_top->getIconClass() ) ) ? 'fas fa-chevron-up' : esc_attr( $fab_scroll_to_top->getIconClass() ); ?>"></em>
    <div class="bg-shape"></div>
</div>
<style>
    <?php
        /** Button Color */
        $styles = sprintf(
            '.fab-scroll-to-top, .fab-scroll-to-top .bg-shape { background: %s; }',
            ($fab_scroll_to_top->getTemplate()['color']) ? $fab_scroll_to_top->getTemplate()['color'] : $options->fab_design->template->color
        );
        echo esc_attr($styles);

        /** Icon Color */
        $styles = sprintf(
            '.fab-scroll-to-top em { color: %s; }',
            ($fab_scroll_to_top->getTemplate()['icon']['color']) ? $fab_scroll_to_top->getTemplate()['icon']['color'] : $options->fab_design->template->icons->color
        );
        echo esc_attr($styles);
    ?>
</style>