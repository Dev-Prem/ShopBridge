package com.shopbridge.api.ShopBridge.Controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.shopbridge.api.ShopBridge.Beans.ResponseRepresentation;
import com.shopbridge.api.ShopBridge.Beans.ShopBridge;
import com.shopbridge.api.ShopBridge.Service.ShopBridgeService;

@RestController
public class ShopBridgeRestController {

	@Autowired
	private ShopBridgeService shopBridgeService;

	@RequestMapping(value = "/create", method = RequestMethod.POST)
	public ResponseRepresentation create(@RequestBody ShopBridge shopBridge) {

		ResponseRepresentation response = new ResponseRepresentation();
		try {

			response.setDatetime(new Date());
			byte[] bytes = shopBridge.getImage().getBytes();
			shopBridge.setImageLob(bytes);
			shopBridge.setImage("");
			ShopBridge saveResponse = shopBridgeService.create(shopBridge);
			response.setData(saveResponse);
			response.setStatus("success");
			response.setMessage("Product created successfully");

			return response;

		} catch (Exception exception) {
			response.setStatus("failed");
			response.setMessage("Product creation failed");

			return response;
		}
	}

	@RequestMapping(value = "/readAll", method = RequestMethod.GET)
	public ResponseRepresentation readAll() {

		ResponseRepresentation response = new ResponseRepresentation();
		try {
			response.setDatetime(new Date());
			response.setMessage("success");
			response.setStatus("success");
			response.setData(shopBridgeService.readAll());

			return response;

		} catch (Exception exception) {
			exception.printStackTrace();
			response.setMessage("failed");
			response.setStatus("failed");

			return response;
		}
	}

	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public ResponseRepresentation update(@RequestBody ShopBridge shopBridge) {

		ResponseRepresentation response = new ResponseRepresentation();

		try {

			response.setDatetime(new Date());

			if (shopBridge.getId() == null) {
				response.setMessage("Id can not be null");
				response.setStatus("failed");

				return response;
			}

			shopBridgeService.update(shopBridge);
			response.setStatus("success");
			response.setData(shopBridgeService.readAll());

			return response;

		} catch (Exception exception) {
			response.setMessage("failed to update.");
			response.setStatus("failed");

			return response;
		}
	}

	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public ResponseRepresentation delete(@PathVariable Integer id) {

		ResponseRepresentation response = new ResponseRepresentation();

		try {
			response.setDatetime(new Date());

			if (id == null) {
				response.setMessage("Id can not be null");
				response.setStatus("failed");

				return response;
			}

			shopBridgeService.delete(id);
			response.setStatus("success");
			response.setMessage("Product deleted successfully.");

			return response;

		} catch (Exception exception) {
			response.setMessage("failed to delete.");
			response.setStatus("failed");
			return response;
		}
	}
}
