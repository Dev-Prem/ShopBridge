package com.shopbridge.api.ShopBridge.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.shopbridge.api.ShopBridge.Beans.ShopBridge;

@Service
public class ShopBridgeService {

	@Autowired
	private ShopBridgeRepository shopBridgeRepository;
	
	public ShopBridge create(ShopBridge shopBridge) {
		
		ShopBridge save = shopBridgeRepository.save(shopBridge);
		
		if(save.getImageLob()!=null) {
			save.setImage(new String(save.getImageLob()));	
			save.setImageLob(null);
		}
		
		return save;
		
	}
	
	public List<ShopBridge> readAll() {
		
		List<ShopBridge> list = shopBridgeRepository.findAll();
		
		for(ShopBridge shopBridge : list) {
			if(shopBridge.getImageLob()!=null) {
				shopBridge.setImage(new String(shopBridge.getImageLob()));
				shopBridge.setImageLob(null);
			}			
		}
		
		return list;
	}
	
	public void update(ShopBridge shopBridge) {
		
		shopBridgeRepository.save(shopBridge);
	}
	
	public void delete(int id) {
		shopBridgeRepository.deleteById(id);
	}
}
