<?php
kint($build); // Inspect the block output

namespace Drupal\support_ticket\Controller;

use Drupal\Core\Controller\ControllerBase;

class TicketController extends ControllerBase {
  public function listTickets() {
    return [
      '#markup' => $this->t('Ticket list page under construction.'),
    ];
  }
}

