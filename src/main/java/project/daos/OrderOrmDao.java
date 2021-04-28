package project.daos;

import project.models.Order;
import project.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")

public class OrderOrmDao {

    @Autowired
    OrderRepository orderRepository;

    @PostMapping("/api/orders")
    public Order createOrder(@RequestBody Order order) {
        return orderRepository.save(order);
    }

    @GetMapping("/api/orders")
    public List<Order> findAllOrders() {
        return orderRepository.findAllOrders();
    }

    @GetMapping("/api/orders/{orderId}")
    public Order findOrderById(
            @PathVariable("orderId") Integer id) {
        return orderRepository.findOrderById(id);
    }

    @GetMapping("/api/orders/user/{userId}")
    public List<Order>  findUserOrders(
            @PathVariable("userId") Integer id) {
        return orderRepository.findUserOrders(id);
    }

    @GetMapping("/api/orders/product/{productId}")
    public List<Order>  findProductOrders(
            @PathVariable("productId") Integer id) {
        return orderRepository.findProductOrders(id);
    }

    @PutMapping("/api/orders/{orderId}")
    public Order updateOrder(
            @PathVariable("orderId") Integer id,
            @RequestBody Order orderUpdates) {
        Order order = orderRepository.findOrderById(id);
        order.setTransactionnumber(orderUpdates.getTransactionnumber());
        order.setUserid(orderUpdates.getUserid());
        order.setProductid(orderUpdates.getProductid());
        order.setQuantity(orderUpdates.getQuantity());
        order.setSaleprice(orderUpdates.getSaleprice());
        return orderRepository.save(order);

    }

    @DeleteMapping("/api/orders/{orderId}")
    public void deleteUser(
            @PathVariable("orderId") Integer id) {
        orderRepository.deleteById(id);
    }
}
