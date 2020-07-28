package com.shopbridge.api.ShopBridge.Service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shopbridge.api.ShopBridge.Beans.ShopBridge;

@Repository
public interface ShopBridgeRepository extends JpaRepository<ShopBridge, Integer> {

	
}
