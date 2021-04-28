package project.repositories;

import project.models.Order;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderRepository extends CrudRepository<Order, Integer> {
    @Query(value = "SELECT * FROM orders",
            nativeQuery = true)
    public List<Order> findAllOrders();

    @Query(value = "SELECT * FROM orders WHERE id=:orderId",
            nativeQuery = true)
    public Order findOrderById(@Param("orderId") Integer id);

    @Query(value = "SELECT * FROM orders where userid=:userId",
            nativeQuery = true)
    public List<Order> findUserOrders(@Param("userId") Integer id);

    @Query(value = "SELECT * FROM orders where productid=:productId",
            nativeQuery = true)
    public List<Order> findProductOrders(@Param("productId") Integer id);
}