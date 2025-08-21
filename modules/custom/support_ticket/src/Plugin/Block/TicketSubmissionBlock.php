<?php

namespace Drupal\support_ticket\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormBuilderInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a block with the ticket submission form.
 *
 * @Block(
 *   id = "ticket_submission_block",
 *   admin_label = @Translation("Ticket Submission Block"),
 * )
 */
class TicketSubmissionBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    // Render the ticket submission form.
    $form = 
\Drupal::formBuilder()->getForm('Drupal\support_ticket\Form\TicketSubmissionForm');

    return [
      '#markup' => '<h2>' . $this->t('Submit a Support Ticket') . '</h2>',
      'form' => $form,
    ];
  }
}

